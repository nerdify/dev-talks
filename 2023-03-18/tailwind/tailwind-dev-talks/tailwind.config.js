/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "back-black": "#1e2021",
        "brand-purple": "#7353ca",
        "brand-rose": "#964fa8",
        "brand-blue": "#4d66e6",
        "from-gradient": "rgba(29, 28, 28, 0.444)",
        "to-gradient": "rgba(50, 50, 50, 0.553)",
        "from-gradient-white": "rgba(213, 213, 213, 0.444)",
        "to-gradient-white": "rgba(255, 255, 255, 0.444)",
      },
      dropShadow: {
        circle: ["10px 10px 100px #6e5f98", "-10px -10px 200px #7353ca"],
        "circle-two": ["-10px -10px 100px #964fa8", "10px 10px 200px #964fa8"],
        button: ["0.5px 0.5px 5px #7353ca", "-0.5px -0.5px 10px #4d66e6"],
        "button-hover": ["1px 1px 10px #7353ca", "-1px -1px 20px #4d66e6"],
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translate(0) scale(1)",
          },
          "10%": {
            transform: "translateX(50%) scale(1.1)",
          },
          "40%": {
            transform: "translateY(10%) scale(1)",
          },
          " 60%": {
            transform: "translateY(50%) scale(1.2)",
          },
          " 70%": {
            transform: "translateY(0%) scale(0.9)",
          },
          " 80%": {
            transform: "translate(40%, 30%) scale(1.3)",
          },
          "100%": {
            transform: "translate(0) scale(1)",
          },
        },
        moveTwo: {
          "0%": {
            transform: "translate(0) scale(1)",
          },
          "40%": {
            transform: "translateY(-10%) scale(1)",
          },
          "50%": {
            transform: "translateY(-50%) scale(1.2)",
          },
          "70%": {
            transform: "translateY(0) scale(0.9)",
          },
          "80%": {
            transform: "translateX(-50%) scale(1.1)",
          },
          "90%": {
            transform: "translate(-40%, -30%) scale(1.3)",
          },
          "100%": {
            transform: "translate(0) scale(1)",
          },
        },
      },
      animation: {
        'move': 'move ease-in-out 120s infinite',
        'move-two': 'moveTwo ease-in-out 150s infinite'
      }
    },
  },
  plugins: [],
};
