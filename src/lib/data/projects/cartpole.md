---
title: Cartpole AI Agent
date: 2019-05
description: An artificial intelligence agent, using deep reinforcement learning, created to play CartPole.
published: true
github: https://github.com/james-litch/CartPole
tech:
  - Python
---

CartPole is a classic control problem used to benchmark reinforcement learning algorithms, where an agent must balance a pole on a moving cart by applying forces to the cart in either direction. This project explores deep reinforcement learning by training an agent from scratch to solve the environment, using a neural network to approximate the optimal action for any given state.

## Features

- A Deep Q-Network (DQN) built from scratch to approximate Q-values for each possible action given the current state
- Training loop with reward tracking to visualise the agent's performance improving over episodes

## Challenges

- Getting the agent to converge reliably, since small changes to hyperparameters like learning rate and epsilon decay could cause training to destabilise
- Avoiding catastrophic forgetting, where the agent's performance would suddenly collapse after appearing to learn a good policy
- Tuning the reward signal and episode termination conditions to actually encourage long-term balancing rather than short-term survival
- Balancing exploration and exploitation early versus late in training to avoid the agent getting stuck in a suboptimal policy

## Learnings

- Built a solid foundational understanding of reinforcement learning concepts like Q-learning, value functions, and the exploration-exploitation tradeoff
- Developed a better intuition for how reward shaping directly affects the behaviour an agent learns
