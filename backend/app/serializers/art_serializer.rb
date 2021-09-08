class ArtSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :year, :artist, :image, :category_id
end
