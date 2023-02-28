# frozen_string_literal: true

module Api
  module V1
    class PetsController < ApplicationController

      def index
        pets = [fido, spot, rover, fluffy, patches, tiger, smokey]
        render json: pets, status: :ok
        pet.sort { |pet| pet }
        p pets.sort!
      end

    end
  end
end
