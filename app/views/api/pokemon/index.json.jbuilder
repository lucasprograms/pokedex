def fill_in (url)
  asset_path(url)
end

@pokemon.each do |poke|
  json.set! poke.id do
    json.(poke, :id, :name)
    json.image_url fill_in(poke.image_url)
  end
end

