var dnsSeoHost = ['ns1.seohost.pl.', 'ns2.seohost.pl.'];
var ipSeoHost = '188.210.221.82';
var domainKey = 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mnCrXn6bcJzGIolfyKApxUMevemB+hZZswZZ/35j5dXwBLo6EDY0xPO79DBPGQec2FFbAD3K57Wn3FnvJYwNQPK7lIzeZrEgQA4Y/rmOxqkL6jR8ipfkoJV0upFGJkHyLjdrDNsg6zscj1RGKmrZHJfLgn0Nbe40ZAzEiE5CcywUR6sIn2eRElPJOQK4io5NrfZdSiYwK19qZ+e2KjaOpJwmdI4zFt9yiPbe5qSamvpLwcfqlX3MkOtz3aSHaVcf/XNcZd5zdd+fkp2g1eIBnhhDrltj48pWPlI/mh3aCQe3b2P0JJht7745UfVpm+Cn9JBeojvLA+QiFk4a+bZwQIDAQAB';

D('ziemowitgil.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),

A('@',ipSeoHost),
CNAME('www','ziemowitgil.pl.'),
MX('@', 3600,'188.210.221.82.'), 
TXT('_dmarc','v=DMARC1; p=none; sp=none; rua=mailto:spam-reports@microhost.pl'),
TXT('x._domainkey',domainKey),

// Blog
A('blog',ipSeoHost),

// Domena  do routera
CNAME('router','a36a0cf7f66a.sn.mynetname.net.'),
CNAME('router2', 'a36a0cf7f66a.sn.mynetname.net.'),
// FTP
A('ftp',ipSeoHost),
A('mail',ipSeoHost)



);

