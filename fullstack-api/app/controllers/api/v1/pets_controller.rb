module Api
  module V1
    class PetsController < ApplicationController
      def index
        species = params[:species]
        pets = Pet.order(featured: :asc, name: :asc)
        pets = pets.where(species: species) if species.present?
        render json: pets, status: :ok
      end
    end
  end
end
