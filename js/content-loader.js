/**
 * Content Loader - Loads and renders content from JSON files
 * This makes the site easy to maintain by editing JSON instead of HTML
 */

const ContentLoader = {
  /**
   * Load JSON content from a file
   * @param {string} path - Path to JSON file
   * @returns {Promise<Object>} Parsed JSON data
   */
  async load(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return await response.json();
    } catch (error) {
      console.error('ContentLoader Error:', error);
      return null;
    }
  },

  /**
   * Render a content item as HTML
   * @param {Object} item - Content item from JSON
   * @returns {string} HTML string
   */
  renderItem(item) {
    const safeTitle = this.escapeHTML(item.title || '');
    const safeId = this.escapeHTML(item.id || '');
    const safeHref = this.safeUrl(item.url);
    const statusClass = item.status === 'active' ? 'tag-active' : '';
    const statusTag = item.status ? `<span class="tag ${statusClass}">${this.escapeHTML(this.capitalize(item.status))}</span>` : '';
    const typeTag = item.tag ? `<span class="type">${this.escapeHTML(item.tag)}</span>` : '';
    const blurb = this.escapeHTML(item.blurb || item.description || '');
    const detail = item.blurb && item.description && item.description !== item.blurb
      ? `<p class="content-desc">${this.escapeHTML(item.description)}</p>`
      : '';
    const thumb = item.thumbnail
      ? `<img class="content-thumb" src="${this.escapeHTML(item.thumbnail)}" alt="${safeTitle} thumbnail" loading="lazy" />`
      : '';

    return `
      <a href="${safeHref}" class="content-item" data-id="${safeId}">
        ${thumb}
        <div class="content-main">
          <h3 class="content-title">${safeTitle}</h3>
          <p class="content-blurb">${blurb}</p>
          ${detail}
        </div>
        <div class="content-meta">
          ${statusTag}
          ${typeTag}
        </div>
      </a>
    `;
  },

  /**
   * Render a simple list item (for Finds/Fun sections)
   * @param {Object} item - Content item from JSON
   * @returns {string} HTML string
   */
  renderSimpleItem(item) {
    const safeTitle = this.escapeHTML(item.title || '');
    const safeBlurb = this.escapeHTML(item.blurb || item.description || '');
    const safeHref = this.safeUrl(item.url);
    const thumb = item.thumbnail
      ? `<img class="simple-thumb" src="${this.escapeHTML(item.thumbnail)}" alt="${safeTitle} thumbnail" loading="lazy" />`
      : '';

    return `<li>${thumb}<a href="${safeHref}">${safeTitle}</a> - <span>${safeBlurb}</span></li>`;
  },

  /**
   * Render items into a container
   * @param {string} containerId - ID of container element
   * @param {Array} items - Array of content items
   * @param {Object} options - Options (featuredOnly, simpleList)
   */
  renderInto(containerId, items, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container #${containerId} not found`);
      return;
    }

    let filteredItems = items;
    
    // Filter to featured only if specified
    if (options.featuredOnly) {
      filteredItems = items.filter(item => item.featured);
    }

    // Limit number of items if specified
    if (options.limit) {
      filteredItems = filteredItems.slice(0, options.limit);
    }

    // Render based on list type
    if (options.simpleList) {
      container.innerHTML = filteredItems.map(item => this.renderSimpleItem(item)).join('');
    } else {
      container.innerHTML = filteredItems.map(item => this.renderItem(item)).join('');
    }
  },

  /**
   * Load and render a section
   * @param {string} jsonPath - Path to JSON file
   * @param {string} containerId - ID of container element
   * @param {Object} options - Render options
   */
  async loadSection(jsonPath, containerId, options = {}) {
    const data = await this.load(jsonPath);
    if (data && data.items) {
      this.renderInto(containerId, data.items, options);
    }
  },

  /**
   * Capitalize first letter
   * @param {string} str - String to capitalize
   * @returns {string} Capitalized string
   */
  capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  escapeHTML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  safeUrl(url) {
    const value = String(url || '#').trim();
    if (!value) return '#';
    if (value.startsWith('#') || value.startsWith('/') || value.startsWith('./') || value.startsWith('../')) {
      return value;
    }
    try {
      const parsed = new URL(value, window.location.origin);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.href;
    } catch (e) {
      return '#';
    }
    return '#';
  }
};

// Make it available globally
window.ContentLoader = ContentLoader;
