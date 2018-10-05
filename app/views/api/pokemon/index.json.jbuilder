@pokemon.each do |poke|
  json.set! poke.id do
    json.(poke, :id, :name)
  end
end