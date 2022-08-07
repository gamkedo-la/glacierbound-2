//#region General Constants
const DEBUG_MODE_ENBALED = false;
const FRAMES_PER_SECOND = 60;
const BACKGROUND_FILL_COLOR = "rgba(100,100,100,1)";
const GROUND_FILL_COLOR = "rgba(200,200,200,1)";
const TEXT_DISPLAY_TIME_SEC = 5;
const OBJECT_TYPE_DOOR = 0;
const OBJECT_TYPE_ITEM = 1;
const OBJECT_TYPE_INTERACTABLE = 2;
//#endregion

//#region Projection Plane Constants
const PROJECTION_PLANE_WIDTH = 160;
const PROJECTION_PLANE_HEIGHT = 144;
const CANVAS_SCALE_FACTOR = 6;
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

const OBJECTIVE_FIND_BEACON = "Find the source of the emergency beacon"
const OBJECTIVE_FIND_WRENCH = "Find the wrench in the ship's boiler room";
const OBJECTIVE_EXIT_SHIP = "Exit the ship";
const OBJECTIVE_FIND_MINE_KEY = "Find the key to unlock the mines";
const OBJECTIVE_FIND_CROW_BAR = "Search for a crowbar in the mines";
const OBJECTIVE_FIND_LANTERN = "Search for a lantern in the research station offices";
const OBJECTIVE_FIND_LAB_CAVE_ENTERANCE = "Search the caves for a secret entrance to underground science lab";
const OBJECTIVE_RETURN_TO_SHIP = "Take the artifact back to the computer on the ship";

//#endregion

//#region Map Grid Constants
const MAP_NUM_COLS = 20;
const MAP_NUM_ROWS = 15;
const TILE_SIZE = 32;
const TILE_TYPE_WALL = 1;
const TILE_TYPE_FLOOR = 0;
const TEXTURE_SIZE = 32;

const MINIMAP_ENABLED = true; // the large opaque debug map
const MINIMAP_SCALE_FACTOR = 0.2;

const RADAR_ENABLED = false; // // the small transparent map
const RADAR_BG_ENABLED = true;
const RADAR_BG_FILL = "rgba(0,0,0,0.15)";
const RADAR_ALPHA = 0.5;
const RADAR_W = 200;
const RADAR_H = 150;
const RADAR_X = 560;
const RADAR_Y = 524;
const RADAR_SCALE_FACTOR = 1/8;
//#endregion Map Grid Constants

//#region Keyboard Code Constants
const KEY_TAB = 9;
const KEY_ENTER = 13;
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;
const KEY_LETTER_E = 69;
const KEY_LETTER_I = 73;
const KEY_LETTER_L = 76;
const KEY_LETTER_M = 77;
const KEY_LETTER_P = 80;
const KEY_LETTER_Q = 81;
const KEY_LETTER_R = 82;
const KEY_LETTER_T = 84;
const KEY_LEFT_SHIFT = 16;
const KEY_ALT = 18;
const KEY_SPACE = 32;
const KEY_NUMBER_1 =  49;
const KEY_NUMBER_2 =  50;
const KEY_NUMBER_3  = 51;
const KEY_NUMBER_4  = 52;
const KEY_RIGHT_BRACKET = 221;
const KEY_LEFT_BRACKET = 219;
const KEY_ESCAPE = 27;
//#endregion Keyboard Code Constants