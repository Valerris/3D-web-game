import { Color } from 'three'

export const GAME_NAME = '3D WEB GAME'
export const TERRAIN_SIZE = 1000
export const TEXTURE_SIZE = TERRAIN_SIZE * 0.05
export const LEFT_WALL = (-TERRAIN_SIZE / 2) * 0.5
export const RIGHT_WALL = (TERRAIN_SIZE / 2) * 0.5
export const WALL_RADIUS = 60
export const GAME_SPEED_START = 1
export const GAME_SPEED_LEVEL_UP = 0.2
export const GAME_SPEED_BASE = 200
export const SPEED_UP_BOOSTER = 1.5
export const OBJECT_TURN_RATE = 1
export const SKY_MOVEMENT_RATE = 1
export const FREE_REAL_ESTATE = 600
export const OBSTACLES_QT = 80
export const OBSTACLES_HEIGHT = 20
export const HUD_UPDATE_RATE = 0.5
export const HERO_TURNING_RATE = 0.5
export const CORRECTIONAL_DELTA = 2

//CONTROLS
export const CONTROL_LEFT = ['ArrowLeft', 'a', 'A']
export const CONTROL_RIGHT = ['ArrowRight', 'd', 'D']
export const CONTROL_SPEED_UP = ['ArrowUp', 'w', 'W']

//COLORS
export const MAIN_MENU_BACKGROUND_COLOR =
  'linear-gradient(3deg, rgba(0,0,0,1) 0%, rgba(154,122,246,0) 50%)'
export const EARTH_EMISSION_COLOR = new Color(200, 200, 100)
export const ENVIRONMENT_EMISSIVE_COLOR = new Color(0, 0, 255)
export const MIST_COLOR = new Color('rgba(250, 0, 0, 0.1)')
export const OBSTACLE_EMISSIVE_COLOR = new Color(255, 215, 200)
export const TERRAIN_COLOR = new Color(`rgba(255, 255, 255,0.5)`)
export const TERRAIN_EMISSIVE_COLOR = new Color(`rgb(243, 0, 190)`)
export const WALL_COLOR = new Color(`rgb(220,10, 0)`)
export const ORB_EMISSION_COLOR = new Color(`rgb(255, 0, 0)`)
