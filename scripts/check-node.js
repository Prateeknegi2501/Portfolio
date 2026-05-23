const [major] = process.versions.node.split('.').map(Number);

if (major < 14 || major >= 19) {
  console.error(
    `Unsupported Node.js version: ${process.version}\n` +
      'This project uses Gatsby v3 and should run on Node 14, 16, or 18.\n' +
      'Switch Node version (recommended: 18 LTS), then reinstall dependencies.'
  );
  process.exit(1);
}

