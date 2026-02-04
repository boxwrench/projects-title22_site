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
    const statusClass = item.status === 'active' ? 'tag-active' : '';
    const statusTag = item.status ? `<span class="tag ${statusClass}">${this.capitalize(item.status)}</span>` : '';
    const typeTag = item.tag ? `<span class="type">${item.tag}</span>` : '';
    
    return `
      <a href="${item.url || '#'}" class="content-item" data-id="${item.id}">
        <div class="content-main">
          <h3 class="content-title">${item.title}</h3>
          <p class="content-desc">${item.description}</p>
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
    return `<li><a href="${item.url || '#'}">${item.title}</a> - <span>${item.description}</span></li>`;
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
  }
};

// Make it available globally
window.ContentLoader = ContentLoader;
