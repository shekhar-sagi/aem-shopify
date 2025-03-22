export default function decorate(block) {
  const imageSrc = block.dataset.image || '';
  const heading = block.dataset.heading || 'Default Banner Title';
  const subheading = block.dataset.subheading || '';

  const bannerDiv = document.createElement('div');
  bannerDiv.className = 'banner';
  bannerDiv.style.backgroundImage = `url('${imageSrc}')`;

  bannerDiv.innerHTML = `
      <div class="banner-content">
        <h1>${heading}</h1>
        <div class="subheading">${subheading}</div>
      </div>
    `;
  block.textContent = '';
  block.append(bannerDiv);
}
