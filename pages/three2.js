import React, {Component} from 'react';
import ReactDOM from "react-dom";
import * as THREE from 'three';

import Page from "../lib/page"

class Three extends Component {

    componentDidMount() {

        // * Render & Camera
        var size = {
            width: window.innerWidth,
            height: window.innerHeight,
            prop: function(){ return this.width/this.height; },
        }
        var renderer = new THREE.WebGLRenderer({    antialias: true,    });
        renderer.setSize( size.width,size.height );
        this.mount.appendChild( renderer.domElement );
        //
        var camera = new THREE.PerspectiveCamera( 75, size.prop(), 0.1, 1000 );
        camera.position.z = 5
        var scene = new THREE.Scene();
        
        // * 
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshNormalMaterial();
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        var animate = (time)=>{
              requestAnimationFrame( animate );
            //   cube.rotation.x += 0.01;
            //   cube.rotation.y += 0.01;
            cube.rotation.x = time / 10000
            cube.rotation.y = time /  5000
            renderer.render( scene, camera );
        };
        animate();

    }

    render() {
        return(
            <Page>
                <div style={{ }} >
                    <div ref={ref=> (this.mount=ref) } ></div>
                </div>
            </Page>
        )
    }

}

export default Three;