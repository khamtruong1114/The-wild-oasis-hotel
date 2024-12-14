import supabase from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

async function deleteCabins(id) {
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

export { getCabins, deleteCabins };
