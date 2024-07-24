import {update as updateSnake, draw as drawSnake} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'
import { getSnakeHead } from './snake.js'
import { snakeIntersection } from './snake.js'
let lastRenderTime=0
let gameOver=false
const SNAKE_SPEED =1
const gameBoard = document.getElementById('game_board')


function main(currentTime) {
    if(gameOver){
        return alert("Game over")
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime
    console.log(currentTime)

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()

}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkDeath(){
    gameOver=outsideGrid(getSnakeHead())||snakeIntersection()
}