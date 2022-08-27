namespace tileAnimation {
    /**
     *  Make a ani tile-Anim where put the animation
     */
    //% block= "set tile col $col row $row animate $anim"
    //% blockId=tileanimationsettileanimateat
    
    export function setTileAnimateAt(col: number, row: number, anim: Image[], imageInto: Image): void {
        
        let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
        
        tiles.placeOnTile(mySprite, tiles.getTileLocation(col, row))
        
        animation.runImageAnimation(mySprite, anim, 100, false)
        
        tiles.setTileAt(tiles.getTileLocation(col, row), imageInto) 
    }
}
