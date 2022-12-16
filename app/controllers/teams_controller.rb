class TeamsController < ApplicationController

    def index 
        render json: Team.all, include: :user
    end

    def show
        render json: Team.find(params[:id])
    end

    def create 
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    private
    
    def team_params
        params.permit(:user_id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :basho)
    end
end
