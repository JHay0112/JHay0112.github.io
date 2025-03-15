/**
 * This script is responsible for setting the background image of the header using a random
 * selection from a set of images.
 */

const BANNER = document.getElementById("banner");

const HEADER_DIR = "/img/headers";
const HEADERS = [
    "oxford_terrace.jpg",
    "maruia_falls.jpg",
    "peel_forest_stream.jpg",
    "garden_fern.jpg",
    "bird_in_sky.jpg",
    "puaka_james_hight.jpg",
    "christchurch_airport.jpg",
    "aoraki.jpg",
    "aurora_in_flight.jpg",
    "c17_at_chch_airport.jpg",
    "enel300_pcb.jpg",
    "aurora.jpg",
    "moon.jpg",
    "yagi.jpg",
    "dandelion.jpg",
    "power_poles.jpg",
    "leaves_on_wood.jpg"
];


var selected_image = HEADER_DIR + "/" + HEADERS[Math.floor(Math.random() * HEADERS.length)];
BANNER.src = selected_image;