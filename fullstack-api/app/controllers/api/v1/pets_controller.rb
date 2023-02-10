# frozen_string_literal: true

module Api
  module V1
    class PetsController < ApplicationController

      def index
       pets = Pet.all.sort_by { |key| key['name']}
        render json: pets, status: :ok
      end

    end
  end
end
