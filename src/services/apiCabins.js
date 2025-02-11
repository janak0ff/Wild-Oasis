import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Determine if we're updating or creating
  let query;
  if (id) {
    // Edit cabin
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);
  } else {
    // Create cabin
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]);
  }

  // Execute the query
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(
      id ? "Cabin could not be updated" : "Cabin could not be created"
    );
  }

  // 2. Upload image if it's a new image
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete cabin if upload fails (only for new cabins)
    if (storageError) {
      if (!id) {
        await supabase.from("cabins").delete().eq("id", data.id);
      }
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
