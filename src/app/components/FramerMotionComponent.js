import React, { Component } from 'react'
import { motion } from 'framer-motion'

import './FramerMotionComponent.scss'

export default class FramerMotionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            randomScale: Math.random() + 0.1
        }

        this.setNewScale = this.setNewScale.bind(this)
    }

    setNewScale() {
        this.setState((prev) => {
            return {
                randomScale: Math.random() + 0.1
            }
        })
    }

    render() {

        return (
            <motion.div
                className="FramerMotionComponent"
                animate={{
                    scale: this.state.randomScale
                }}
                onAnimationComplete={this.setNewScale}
            >
                <motion.div
                    animate={{
                        scale: this.state.randomScale
                    }}
                    transition={{ delay: 0.1 }}
                >

                </motion.div>
            </motion.div>
        )
    }
}