function ipv4Parser(ip, mask) {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);
    
    const networkAddr = [];
    const hostAddr = [];
    
    for (let i = 0; i < 4; i++) {
        networkAddr.push(ipOctets[i] & maskOctets[i]);
        hostAddr.push(ipOctets[i] & ~maskOctets[i]);
    }
    
    return [networkAddr.join('.'), hostAddr.join('.')];
}
