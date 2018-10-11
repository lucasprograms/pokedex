@pokemon.each do |poke|
  json.set! poke.id do
    json.(poke, :id, :name)
    json.image_url asset_path(poke.image_url)
  end
end

