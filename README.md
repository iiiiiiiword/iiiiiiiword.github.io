# Boyu He - Academic Homepage

This repository contains the source code for my personal academic homepage:

**Website:** [https://iiiiiiiword.github.io](https://iiiiiiiword.github.io)

## About Me

I am Boyu He, a second-year master's student at the College of Computer Science and Technology, National University of Defense Technology (NUDT), advised by Prof. Zhiping Cai.

My current research interests include:

- Image style transfer
- 3D reconstruction based on 3D Gaussian Splatting
- Edge detection

I am open to research collaborations and related opportunities.

## Experience

- **Huawei Nanjing Research Institute** - HiSilicon Semiconductor Business Department, Intern, 2026.06 - Present
- **National University of Defense Technology** - Master's Degree Candidate in Computer Science, 2024.09 - Present
- **Ocean University of China** - Bachelor's Degree in Information Science and Engineering, 2020.09 - 2024.06

## Featured Publication

### StyleGallery: Training-free and Semantic-aware Personalized Style Transfer from Arbitrary Image References

**Boyu He\***, Yunfan Ye\*, Chang Liu, Weishang Wu, Fang Liu, and Zhiping Cai

Accepted by **CVPR 2026**.

StyleGallery is a training-free and semantic-aware framework for personalized style transfer from arbitrary image references. It adaptively clusters and matches semantic regions without extra masks, enabling fine-grained and interpretable stylization while preserving global content structure and supporting multiple style references.

- [Paper](https://arxiv.org/abs/2603.10354)
- [Code](https://github.com/iiiiiiiword/StyleGallery)

## Website Contents

The homepage currently includes:

- Personal profile and research interests
- Latest news
- Research and internship experience
- Publications
- Curriculum vitae
- Academic and social links

The main content is maintained in the following files:

```text
_config.yml              Personal information and social links
_pages/about.md           Homepage content
_data/navigation.yml      Navigation menu
assets/css/home.css       Homepage styles
images/                   Profile photo, logos, and publication images
CV_HBY.pdf                Curriculum vitae
```

## Local Development

This website is built with Jekyll and is compatible with GitHub Pages.

### Requirements

- Ruby with DevKit
- Bundler
- Git

### Install Dependencies

```bash
bundle install
```

### Run Locally

```bash
bundle exec jekyll serve --livereload
```

Then visit:

```text
http://127.0.0.1:4000/
```

### Build the Website

```bash
bundle exec jekyll build
```

Generated files are written to `_site/`, which is excluded from Git.

## Deployment

The website is deployed through GitHub Pages from the `main` branch. Pushing updates to this repository triggers a new site build.

```bash
git add -A
git commit -m "Update homepage"
git push
```

## Contact

- Email: [heboyu@nudt.edu.cn](mailto:heboyu@nudt.edu.cn)
- GitHub: [iiiiiiiword](https://github.com/iiiiiiiword)
- Google Scholar: [Boyu He](https://scholar.google.com/citations?user=isoRs9IAAAAJ)

## Acknowledgements

This website is based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll theme and was adapted from the homepage template by [Yue Su](https://selen-suyue.github.io/).

## License

The website source code is available under the terms of the [MIT License](LICENSE).
