ARIA_RPC_SECRET="password"
aria2c --enable-rpc --rpc-listen-all=false --rpc-listen-port 8210 --max-concurrent-downloads=1 --max-connection-per-server=10 --rpc-max-request-size=1024M --seed-time=0.01 --min-split-size=10M --follow-torrent=mem --split=10 --rpc-secret=$ARIA_RPC_SECRET --daemon=true
