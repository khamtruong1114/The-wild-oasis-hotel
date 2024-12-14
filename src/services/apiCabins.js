import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabins(newCabin) {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase
    .from("cabins") //cabins table
    .delete()
    .eq("id", id); // waht row to delete
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
