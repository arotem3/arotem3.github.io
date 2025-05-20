---
layout: homepage
---

## About Me

I am a Ph.D. student in the Department of Mathematics at Virginia Tech, where I research numerical methods for partial differential equations (PDEs) with a focus on high-performance computing (HPC). My work lies at the intersection of algorithmic theory and scalable implementation. A central focus of my research is the development of the __WaveHoltz__ method for solving frequency-domain wave propagation problems. This includes a general theory establishing convergence in the semi-discrete setting, alongside the design of computational strategies that are efficient on modern parallel architectures. I am actively working on extending the WaveHoltz algorithm to multiscale modeling, and domain decomposition, enabling scalable solvers for increasingly complex physical systems.

I earned both my B.S. and M.S. in Applied Mathematics and Statistics from the Colorado School of Mines. During that time, I worked on a project using machine learning to enhance the value of hyperspectral data in geosciences, bridging lab-based and field data collection techniques. This experience deepened my interest in combining applied mathematics with real-world applications.

I have contributed to the [MFEM](https://mfem.org) finite element library, where I implemented a matrix-free interior penalty DG diffusion operator optimized for multi-GPU computing. In addition to my research at Virginia Tech, I collaborate with researchers at Lawrence Livermore National Laboratory on the [GenDiL](https://github.com/GenDiL/GenDiL) (Generalized Discretization Library) project, which focuses on flexible, high-performance implementations of finite element methods in arbitrary dimensions. This collaboration began during a research internship at [LLNL](https://www.llnl.gov) and continues to support the development of cutting-edge, high-dimensional simulation tools.

## Research Interests

- **Numerical PDEs:** finite element methods, finite difference methods, WaveHoltz, domain decomposition.
- **High Performance Computing:** GPU and many-core distributed algorithms and implementations in C++.

{% include_relative _includes/publications.md %}

<!-- {% include_relative _includes/services.md %} -->

{% include_relative _includes/software.md %}
