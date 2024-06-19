module.exports = {
  apps: [
    {
      name: 'adbarta',
      port: '3000',
      exec_mode: 'cluster',
      instances: '2',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
