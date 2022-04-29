//#region General Constants
const FRAMES_PER_SECOND = 60;
const BACKGROUND_FILL_COLOR = "rgba(100,100,100,1)";
const GROUND_FILL_COLOR = "rgba(200,200,200,1)";
//#endregion

//#region Projection Plane Constants
const PROJECTION_PLANE_WIDTH = 160;
const PROJECTION_PLANE_HEIGHT = 144;
const CANVAS_SCALE_FACTOR = 4;
const FOV_DEGREES = 60;
const FOV_RADS = degreesToRadians(FOV_DEGREES);
const PROJECTION_PLAIN_DISTANCE = (PROJECTION_PLANE_WIDTH / 2) / Math.tan(FOV_RADS / 2);
const RAY_INCREMENT_WIDTH = 1;
const NUM_OF_RAYS = PROJECTION_PLANE_WIDTH / RAY_INCREMENT_WIDTH;
const RAY_ANGLE_INCREMENT = FOV_RADS / NUM_OF_RAYS;
//#endregion Projectionm Plan Constants

//#region Player Constants
const RIGHT = 1; 
const FORWARD = 1;
const LEFT = -1;
const BACKWARD = -1;
const NEUTRAL = 0;
//#endregion

//#region Map Grid Constants
const MINIMAP_SCALE_FACTOR = 0.4;
const MAP_NUM_ROWS = 11;
const MAP_NUM_COLS = 15;
const TILE_SIZE = 32;
const TILE_TYPE_WALL = 1;
const TILE_TYPE_FLOOR = 0;
const TEXTURE_SIZE = 32;
//#endregion Map Grid Constants

//#region Keyboard Code Constants
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;
const KEY_LETTER_E = 69;
const KEY_LETTER_L = 76;
const KEY_LETTER_M = 77;
const KEY_LETTER_P = 80;
const KEY_LETTER_Q = 81;
const KEY_ALT = 18;
const KEY_SPACE = 32;
const KEY_NUMBER_1 =  49;
const KEY_NUMBER_2 =  50;
const KEY_NUMBER_3  = 51;
const KEY_NUMBER_4  = 52;
const KEY_RIGHT_BRACKET = 221;
const KEY_LEFT_BRACKET = 219;
//#endregion Keyboard Code Constants