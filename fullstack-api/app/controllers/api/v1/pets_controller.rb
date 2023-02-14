# frozen_string_literal: true

module Api
  module V1
    class PetsController < ApplicationController

      def index
        if params.has_key?('species') && params['species']
          pets = Pet.where(species: params["species"])
        else
           pets = Pet.all
        end
        render json: pets.sort_by { |key| key['name']}, status: :ok
      end

    end
  end
end
