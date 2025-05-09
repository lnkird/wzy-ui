# Vue3 Component Library

A modern Vue 3 component library built with TypeScript and Vite.

## Project Structure

```
vue3-component-library/
├── packages/
│   └── components/        # Component library package
│       ├── src/
│       │   ├── components/  # Individual components
│       │   └── index.ts     # Main entry file
│       ├── package.json
│       └── vite.config.ts
├── docs/                 # Documentation site
│   ├── .vitepress/
│   │   └── config.ts
│   ├── components/       # Component documentation
│   └── package.json
├── package.json         # Root package.json
└── pnpm-workspace.yaml  # PNPM workspace config
```

## Development

### Prerequisites

- Node.js >= 16
- PNPM >= 8

### Setup

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Build

```bash
# Build all packages
pnpm build
```

## Documentation

The documentation site is built with VitePress. To start the documentation site in development mode:

```bash
cd docs
pnpm dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 