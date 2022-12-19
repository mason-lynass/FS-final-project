class TeamsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        render json: Team.all, include: :user
    end

    def show
        render json: Team.find(params[:id])
    end

    def create 
        team = Team.create!(team_params)
        if team.valid? 
            render json: team, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        Team.find(params[:id]).destroy
        head :no_content
    end

    private
    
    def team_params
        params.permit(:user_id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :basho)
    end

    def render_unprocessable_entity_response
        render json: { errors: "Make sure you've picked enough wrestlers!" }, status: :unprocessable_entity
    end
end
