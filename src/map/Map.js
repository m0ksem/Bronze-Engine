import {Object} from "../objects/Object"

export class Map {
    constructor (engine) {
        this.engine = engine
        this.objects = []
        this.lands = []
        this.camera
    }

    createObject () {
        let object = new Object(engine)
        this.engine.objects.push(object)
        return object
    }

    addObject (object) {
        this.objects.push(object)
    }

    removeObject (object) {
        let index = this.objects.indexOf(object)

        if (index == -1) 
            return false

        this.objects.splice(index , 1)
        return true
    }

    removeObjectByName (name) {
        this.objects.forEach(object => {
            if (object.name == name) {
                this.removeObject(object)
                return true
            }
        })
        return false
    }
}