#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create generated directory if it doesn't exist
const generatedDir = join(__dirname, '..', 'generated');
mkdirSync(generatedDir, { recursive: true });

// Generate build info (deterministic for caching)
const buildInfo = {
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  generatedBy: 'turbo-codegen',
};

// Write to file
const outputPath = join(generatedDir, 'build-info.json');
writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

console.log('✓ Generated build-info.json');
console.log(`  Version: ${buildInfo.version}`);
console.log(`  Environment: ${buildInfo.environment}`);
