<?php
define('DB_NAME', 'wordpress-db');
define('DB_USER', 'cloudflare');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

define('AUTH_KEY',         '##nV7i#CWKqssBW:7$Q3v_1T,vu{peTjBV3}4L-L#SWDhj%Pzsjl{M]Zzi)bF}Yt');
define('SECURE_AUTH_KEY',  '|FF-lV*K^:-IZ|o)tt+]IPrH>A$&+g|R@`1+;b|`uLFuuiavQvO`kq>-GaC$S-?&');
define('LOGGED_IN_KEY',    'k9B.9Tt:_,{+i!>&@glA4W5x17ZoR>7[|/-@[FlW`Rbgyg}{g~pEFO5UKMWK+b{d');
define('NONCE_KEY',        '#0/&#Ev/&Ga1zJVgKY0B6wV:31[.TbhsRF,  =5|!T?Sq8pGi:PX+T{X+r1(sLo;');
define('AUTH_SALT',        '|_9&(@V>2^uOmohT(&FC?+H3q.><.W3lwTEal*~?rMt?a^#w{?V3dpDJeWY_f|pq');
define('SECURE_AUTH_SALT', 'b=k,hTvaUzNf|q!vhXQ2[$:E.evEhn<vn%~6H*ob:|R=e<kjZ#zCe5pS Ab}KB+^');
define('LOGGED_IN_SALT',   'C{z 5}*Mg&L<[TAFQ3$9I(VtrN,sWyyw_$*/Qlb@e{r_EZ,]+/}P*NB(oGg9  : ');
define('NONCE_SALT',       'n|ITqTyh@82OlH.Y [|;^-e[t*rKCiZ !XYUYf[{RRG_8+<ROZ/WqkoC5>`EXW*n');

$table_prefix = 'wp_';

define('WP_DEBUG', false);

if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');
