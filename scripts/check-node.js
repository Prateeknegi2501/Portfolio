const [major] = process.versions.node.split('.').map(Number);

if (major < 20) {
  console.error(
    `Unsupported Node.js version: ${process.version}\n` +
      'This project requires Node.js 20 or newer.\n' +
      'Switch Node version (recommended: 20 LTS or newer), then reinstall dependencies.',
  );
  process.exit(1);
}
