# jackb998.github.io

Personal website of **Jacopo Beghetto**, Data & BI Analyst based in Lausanne, Switzerland.

🌐 **Live:** [jackb998.github.io](https://jackb998.github.io)

The site presents my experience in BI, reporting and FP&A, a personal blog, my endurance sports journey and a contact page for connecting, CV requests and job opportunities.

## Pages

| Page | Path | Content |
|---|---|---|
| Home | `/` | About, experience, education, selected projects, skills |
| Blog | `/blog/` | Personal posts on reporting, data and sport |
| Sport | `/sport/` | Past races and upcoming events |
| Contact | `/contact/` | LinkedIn, GitHub, contact form ("Let's connect" / "Hire me", optional CV request), support |

## Built with

Plain **HTML and CSS**, a few lines of vanilla JavaScript. No frameworks, no build step, no tracking.

- Hosted for free on **GitHub Pages** (branch `main`, root folder)
- Classic editorial design with automatic dark mode
- Contact form delivered by email through [Web3Forms](https://web3forms.com)
- Support via [Buy Me a Coffee](https://buymeacoffee.com/gq974fttf9y)

## Structure

```
index.html              Home page
style.css               Shared style for every page (colours at the top)
blog/index.html         List of posts
blog/_post-template.html  Template for new posts (not published)
sport/index.html        Races and upcoming events
contact/index.html      Contact form and support section
assets/                 Images (Buy Me a Coffee QR code)
```

## Editing

1. Open the folder and edit the HTML files with any text editor. Each page is divided into sections marked with comments such as `<!-- EXPERIENCE -->`.
2. Preview locally by double-clicking `index.html`.
3. Publish:
   ```bash
   git add -A
   git commit -m "Describe the change"
   git push
   ```
   GitHub Pages updates the live site in about a minute.

**New blog post:** copy `blog/_post-template.html` to `blog/YYYY-MM-DD-title.html`, write the text, then add a line at the top of the list in `blog/index.html`.

## License

© Jacopo Beghetto. All rights reserved: the content of this website may not be reused without permission.
