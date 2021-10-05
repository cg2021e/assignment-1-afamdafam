//Main.js File

function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    // Define vertices data
    /**
     * A ( -0.5, -0.5 )
     * B (  0.5, -0.5 )
     * C (  0.5,  0.5 )
     * D ( -0.5,  0.5 )
     */

    var LeftVertices = [
        //Left Face
        -0.66, -0.14, 0.2, 0.2, 0.2,     // Point A
        -0.72, 0.5, 0.8, 0.8, 0.8,     // Point B
        -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
        -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
        -0.4, -0.35, 0.2, 0.2, 0.2,      // Point D
        -0.66, -0.14, 0.2, 0.2, 0.2,      // Point A
        
        // Mid Face
        0.7, 0.3, 0.8, 0.8, 0.8,   // Point A
        0.58, -0.35, 0.4, 0.4, 0.4,     // Point B
        -0.4, -0.35, 0.4, 0.4, 0.4,     // Point C
        -0.4, -0.35, 0.4, 0.4, 0.4,     // Point C
        -0.45, 0.3, 1.0, 1.0, 1.0,      // Point D
        0.7, 0.3, 0.8, 0.8, 0.8,     // Point A

        //Right Face
         0.96, 0.56, 0.5, 0.5, 0.5,    // Point A
         0.7, 0.3, 0.8, 0.8, 0.8,     // Point B
         0.58, -0.35, 0.2, 0.2, 0.2,     // Point C
         0.58, -0.35, 0.2, 0.2, 0.2,     // Point C
         0.81, -0.2, 0.2, 0.2, 0.2,     // Point D
         0.96, 0.56, 0.5, 0.5, 0.5,    // Point A

         //Top left face
         -0.67, 1.14, 0.5, 0.5, 0.5,    // Point A
         -0.72, 0.5, 0.8, 0.8, 0.8,     // Point B
         -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
         -0.45, 0.3, 1.0, 1.0, 1.0,    // Point C
         -0.45, 0.94, 0.5, 0.5, 0.5,     // Point D
         -0.67, 1.14, 0.5, 0.5, 0.5,    // Point A*/

          //Top mid face
           0.7, 0.95,  0.8, 0.8, 0.8,     // Point A
           0.7, 0.3,  0.8, 0.8, 0.8,      // Point B
          -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
          -0.45, 0.3, 1.0, 1.0, 1.0,    // Point C
          -0.45, 0.94, 0.8, 0.8, 0.8,      // Point D
           0.7, 0.95,  0.8, 0.8, 0.8,     // Point A*/

         //Top Right Face
         0.92, 1.15, 0.4, 0.4, 0.4,      // Point A
         0.96, 0.56, 0.4, 0.4, 0.4,     // Point B
         0.7, 0.3, 0.8, 0.8, 0.8,     // Point C
         0.7, 0.3, 0.8, 0.8, 0.8,    // Point C
         0.7, 0.95, 0.8, 0.8, 0.8,   // Point D
         0.92, 1.15,  0.4, 0.4, 0.4,  // Point A*/

        // Lid Bottom Left
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A
         -0.68, 1.45, 0.5, 0.5, 0.5,     // Point B
        -0.67, 1.14, 0.5, 0.5, 0.5,     // Point C
        -0.67, 1.14, 0.5, 0.5, 0.5,    // Point C
        -0.45, 0.94, 0.8, 0.8, 0.8,     // Point D
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A*/

         // Lid Bottom Mid 1
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A
         0.19, 1.14, 0.8, 0.8, 0.8,     // Point B
         0.19, 0.85, 0.5, 0.5, 0.5,     // Point C
         0.19, 0.85, 0.5, 0.5, 0.5,    // Point C
        -0.45, 0.94, 0.8, 0.8, 0.8,     // Point D
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A*/

        // Lid Bottom Mid 2
        0.19, 0.85, 0.5, 0.5, 0.5,    // Point A
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.2, 0.8, 0.8, 0.8,     // Point C
        0.7, 1.2, 0.8, 0.8, 0.8,    // Point C
        0.7, 0.95, 0.5, 0.5, 0.5,     // Point D
        0.19, 0.85, 0.5, 0.5, 0.5,    // Point A*/

        // Lid Bottom Right
        0.92, 1.15, 0.5, 0.5, 0.5,    // Point A
        0.7, 0.95, 0.5, 0.5, 0.5,     // Point B
        0.7, 1.2, 0.8, 0.8, 0.8,     // Point C
        0.7, 1.2, 0.8, 0.8, 0.8,    // Point C
        0.95, 1.45, 0.5, 0.5, 0.5,     // Point D
        0.92, 1.15, 0.5, 0.5, 0.5,    // Point A*/

        // Lid Top
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        -0.68, 1.45, 0.8, 0.8, 0.8,     // Point B
        -0.45, 1.24, 1.0, 1.0, 1.0,     // Point C
        -0.45, 1.24, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*/

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        0.95, 1.45, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.2, 1.0, 1.0, 1.0,     // Point C
        0.7, 1.2, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*/

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        0.95, 1.45, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.71, 1.0, 1.0, 1.0,     // Point C
        0.7, 1.71, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.83, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        -0.68, 1.45, 0.8, 0.8, 0.8,     // Point B
        -0.45, 1.74, 1.0, 1.0, 1.0,     // Point C
        -0.45, 1.74, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.83, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5    // Point A*
    ];
    
    var RightVertex = [
        //Left Face
        -0.66, -0.14, 0.2, 0.2, 0.2,     // Point A
        -0.72, 0.5, 0.8, 0.8, 0.8,     // Point B
        -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
        -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
        -0.4, -0.35, 0.2, 0.2, 0.2,      // Point D
        -0.66, -0.14, 0.2, 0.2, 0.2,      // Point A
        
        // Mid Face
        0.7, 0.3, 0.8, 0.8, 0.8,   // Point A
        0.58, -0.35, 0.4, 0.4, 0.4,     // Point B
        -0.4, -0.35, 0.4, 0.4, 0.4,     // Point C
        -0.4, -0.35, 0.4, 0.4, 0.4,     // Point C
        -0.45, 0.3, 1.0, 1.0, 1.0,      // Point D
        0.7, 0.3, 0.8, 0.8, 0.8,     // Point A

        //Right Face
         0.96, 0.56, 0.5, 0.5, 0.5,    // Point A
         0.7, 0.3, 0.8, 0.8, 0.8,     // Point B
         0.58, -0.35, 0.2, 0.2, 0.2,     // Point C
         0.58, -0.35, 0.2, 0.2, 0.2,     // Point C
         0.81, -0.2, 0.2, 0.2, 0.2,     // Point D
         0.96, 0.56, 0.5, 0.5, 0.5,    // Point A

         //Top left face
         -0.67, 1.14, 0.5, 0.5, 0.5,    // Point A
         -0.72, 0.5, 0.8, 0.8, 0.8,     // Point B
         -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
         -0.45, 0.3, 1.0, 1.0, 1.0,    // Point C
         -0.45, 0.94, 0.5, 0.5, 0.5,     // Point D
         -0.67, 1.14, 0.5, 0.5, 0.5,    // Point A*/

          //Top mid face
           0.7, 0.95,  0.8, 0.8, 0.8,     // Point A
           0.7, 0.3,  0.8, 0.8, 0.8,      // Point B
          -0.45, 0.3, 1.0, 1.0, 1.0,     // Point C
          -0.45, 0.3, 1.0, 1.0, 1.0,    // Point C
          -0.45, 0.94, 0.8, 0.8, 0.8,      // Point D
           0.7, 0.95,  0.8, 0.8, 0.8,     // Point A*/

         //Top Right Face
         0.92, 1.15, 0.4, 0.4, 0.4,      // Point A
         0.96, 0.56, 0.4, 0.4, 0.4,     // Point B
         0.7, 0.3, 0.8, 0.8, 0.8,     // Point C
         0.7, 0.3, 0.8, 0.8, 0.8,    // Point C
         0.7, 0.95, 0.8, 0.8, 0.8,   // Point D
         0.92, 1.15,  0.4, 0.4, 0.4,  // Point A*/

        // Lid Bottom Left
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A
         -0.68, 1.45, 0.5, 0.5, 0.5,     // Point B
        -0.67, 1.14, 0.5, 0.5, 0.5,     // Point C
        -0.67, 1.14, 0.5, 0.5, 0.5,    // Point C
        -0.45, 0.94, 0.8, 0.8, 0.8,     // Point D
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A*/

         // Lid Bottom Mid 1
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A
         0.19, 1.14, 0.8, 0.8, 0.8,     // Point B
         0.19, 0.85, 0.5, 0.5, 0.5,     // Point C
         0.19, 0.85, 0.5, 0.5, 0.5,    // Point C
        -0.45, 0.94, 0.8, 0.8, 0.8,     // Point D
         -0.45, 1.24, 1.0, 1.0, 1.0,    // Point A*/

        // Lid Bottom Mid 2
        0.19, 0.85, 0.5, 0.5, 0.5,    // Point A
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.2, 0.8, 0.8, 0.8,     // Point C
        0.7, 1.2, 0.8, 0.8, 0.8,    // Point C
        0.7, 0.95, 0.5, 0.5, 0.5,     // Point D
        0.19, 0.85, 0.5, 0.5, 0.5,    // Point A*/

        // Lid Bottom Right
        0.92, 1.15, 0.5, 0.5, 0.5,    // Point A
        0.7, 0.95, 0.5, 0.5, 0.5,     // Point B
        0.7, 1.2, 0.8, 0.8, 0.8,     // Point C
        0.7, 1.2, 0.8, 0.8, 0.8,    // Point C
        0.95, 1.45, 0.5, 0.5, 0.5,     // Point D
        0.92, 1.15, 0.5, 0.5, 0.5,    // Point A*/

        // Lid Top
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        -0.68, 1.45, 0.8, 0.8, 0.8,     // Point B
        -0.45, 1.24, 1.0, 1.0, 1.0,     // Point C
        -0.45, 1.24, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*/

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        0.95, 1.45, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.2, 1.0, 1.0, 1.0,     // Point C
        0.7, 1.2, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.14, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*/

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        0.95, 1.45, 0.8, 0.8, 0.8,     // Point B
        0.7, 1.71, 1.0, 1.0, 1.0,     // Point C
        0.7, 1.71, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.83, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A*

        0.19, 1.5, 0.5, 0.5, 0.5,    // Point A
        -0.68, 1.45, 0.8, 0.8, 0.8,     // Point B
        -0.45, 1.74, 1.0, 1.0, 1.0,     // Point C
        -0.45, 1.74, 1.0, 1.0, 1.0,    // Point C
        0.19, 1.83, 0.8, 0.8, 0.8,     // Point D
        0.19, 1.5, 0.5, 0.5, 0.5    // Point A*
    ];
    for (let vert = 0; vert < LeftVertices.length; vert += 5){
        LeftVertices[vert] -= 2.5;
    }
    for (let vert = 0; vert < RightVertex.length; vert += 5){
        RightVertex[vert] += 2.5;
        RightVertex[vert+1] -= 4.5;
    }
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform vec2 uChange;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition + uChange, 0.0, 5);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    let allVertices = [];

    function Gambar(){
        allVertices = [];
        allVertices.push(...LeftVertices);
        allVertices.push(...RightVertex);

        // Create a linked-list for storing the vertices data
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(allVertices), gl.STATIC_DRAW);

        

        // Teach the computer how to collect
        //  the positional values from ARRAY_BUFFER
        //  to each vertex being processed
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(
            aPosition,
            2,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(aPosition);
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(
            aColor,
            3,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            2 * Float32Array.BYTES_PER_ELEMENT
        );
        gl.enableVertexAttribArray(aColor);

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(
            aPosition,
            2,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(aPosition);
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(
            aColor,
            3,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            2 * Float32Array.BYTES_PER_ELEMENT
        );
        gl.enableVertexAttribArray(aColor);
    }

    var freeze = false;

    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick, false);

    // Create a uniform to animate the vertices
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    var change = [0, 0];

    let delta = 0;
    let goingUp = true;

    function render() {
        if (!freeze) {
             delta += 0.0224;
                if (delta > 7.5){
                    delta = 0;
                    goingUp = !goingUp;
                }
            for (let vert = 0; vert < RightVertex.length; vert += 5){
                // if gerak ke atas
                if (goingUp){
                    RightVertex[vert + 1] += 0.0224; 
                }
                // if gerak ke bawah
                if (!goingUp){
                    RightVertex[vert + 1] -= 0.0224; 
                }
               
            }
            Gambar();
            gl.uniform2fv(uChange, change);
            gl.clearColor(0.4, 0.3, 0.25, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, allVertices.length/5);
        }
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}
