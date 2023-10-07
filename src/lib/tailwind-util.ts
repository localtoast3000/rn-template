import resolveConfig from 'tailwindcss/resolveConfig';
import config from '@root/tailwind.config';

export const tailwindConfig = resolveConfig(config);
