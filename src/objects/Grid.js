
export class Grid {
     constructor(engine) {
        if (engine) {
            engine.polygons.push(this)
        }
        this.webGL = engine.webGL
        
    }
}