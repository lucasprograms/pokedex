@pokemon.each do |poke|
  json.set!(poke.id) do |json|
    json.(poke, :id, :name)
    json.image_url image_path(poke.image_url)
  end
end