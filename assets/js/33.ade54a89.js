(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{434:function(t,_,v){"use strict";v.r(_);var a=v(1),p=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("持续创作，加速成长！这是我参与「掘金日新计划 · 10 月更文挑战」的第3天，"),_("a",{attrs:{href:"https://juejin.cn/post/7147654075599978532",title:"https://juejin.cn/post/7147654075599978532",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看活动详情"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("想必你也对TCP三次握手、四次挥手耳熟不止四五天了，那TCP三次握手、四次挥手到底是什么呢？今天就来口详吧~。")]),t._v(" "),_("h2",{attrs:{id:"一、dns解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、dns解析"}},[t._v("#")]),t._v(" 一、DNS解析")]),t._v(" "),_("p",[t._v("DNS（Domain Name System）：域名系统。DNS是互联网使用命名系统，用来把便于人们使用的机器名字转换为IP地址。互联网的域名系统DNS被设计成为一个联机"),_("strong",[t._v("分布式数据库系统")]),t._v("，采用客户服务器方式。DNS使大多数名字在本地进行"),_("strong",[t._v("解析")]),t._v("，仅少量解析需要在互联网上通信。")]),t._v(" "),_("p",[t._v("域名到IP地址的解析是通过在互联网上的许多域名服务器程序（域名服务器）共同完成")]),t._v(" "),_("p",[t._v("域名到IP地址的解析过程要点：")]),t._v(" "),_("p",[t._v("（1）当某个应用进程需要把主机名解析为IP地址时，该应用进程调用"),_("strong",[t._v("解析程序")]),t._v("，成为DNS的一个客户。")]),t._v(" "),_("p",[t._v("（2）把待解析的域名放在DNS请求报文中，以UDP用户数据报方式发给本地域名服务器（使用UDP是为了减少开销）")]),t._v(" "),_("p",[t._v("（3）本地域名服务器在查找域名后，把对应的IP地址放在回答报文中返回。")]),t._v(" "),_("p",[t._v("如果本地域名服务器不能回答该请求，则此域名服务器就暂时成为DNS中的另一个客户，并向其他域名服务器发出查询请求。这个过程会持续到找到能够回答该请求的域名服务器为止。")]),t._v(" "),_("p",[t._v("应用进程获得目的主机的IP地址后即可进行通信。")]),t._v(" "),_("p",[t._v("使用DNS系统的好处是，DNS系统效率高，且DNS是分布式系统，即使单个计算机出现故障，也不会妨碍整个DNS系统的正常运行。\n客户端->本地域名服务器->根域名服务器->顶级域名服务器->xxx服务器")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df25dab40fba44268d689981789c4cd9~tplv-k3u1fbpfcp-watermark.image?",alt:"DNS.png"}})]),t._v(" "),_("h2",{attrs:{id:"二、http建立连接-三次握手四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、http建立连接-三次握手四次挥手"}},[t._v("#")]),t._v(" 二、HTTP建立连接（三次握手四次挥手）")]),t._v(" "),_("h3",{attrs:{id:"_1、tcp三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、tcp三次握手"}},[t._v("#")]),t._v(" 1、TCP三次握手")]),t._v(" "),_("p",[t._v("（1）客户端向服务端发送报文（SYN包）到服务器，发出请求 SYN=1，同时选择一个初始的序列号 seq=x，等待服务器确认。")]),t._v(" "),_("p",[t._v("服务器接收到SYN包，状态就从LISTEN变成 SYN_SENT")]),t._v(" "),_("p",[t._v("SYN：同步序列编号（Synchronize Sequence Numbers）。是TCP/IP建立连接时使用的握手信号。在客户机和服务器之间建立正常的TCP网络连接时，客户机首先发出一个SYN消息， 服务器使用SYN+ACK应答表示接收到了这个消息，最后客户机再以ACK消息响应。这样在客户机和服务器之间才能建立起可靠的TCP连接，数据才可以在客户机和服务器之间传递。")]),t._v(" "),_("p",[t._v("（2）服务端发送确认报文（SYN_ACK包），SYN=1,ACK=1,ack=x+1，状态变成 SYN_RECV。")]),t._v(" "),_("p",[t._v("ACK (Acknowledge character）：确认字符，在数据通信中，接收站发给发送站的一种传输类控制字符。表示发来的数据已确认接收无误。 在TCP/IP协议中，如果接收方成功的接收到数据，那么会回复一个ACK数据。通常ACK信号有自己固定的格式,长度大小,由接收方回复给发送方。")]),t._v(" "),_("p",[t._v("（3）客户端接收服务器的SYN+ACK包，客户端，服务端状态都变成 ESTABLISHED（TCP连接成功） 完成三次握手，客户端和服务端开始传送数据")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a3b3016219245fc87859654099d651b~tplv-k3u1fbpfcp-watermark.image?",alt:"TCP.png"}})]),t._v(" "),_("h3",{attrs:{id:"_2、为什么一定是三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、为什么一定是三次握手"}},[t._v("#")]),t._v(" 2、为什么一定是三次握手？")]),t._v(" "),_("p",[t._v("TCP 之所以需要3次握手是因为 TCP 双方都是全双工的。全双工指的是，TCP 任何一端既是发送数据方，又是接收数据方，因此这就要求 "),_("strong",[t._v("TCP 通讯双方既要保证自己具备发送数据的能力，又要保证自己具备接收数据能力")]),t._v("。")]),t._v(" "),_("p",[t._v("此外，一个请求发送之后，存在超时重传机制，两次握手会造成资源浪费。 （其实就是为了避免网络信道不可靠的问题，客户端自己是发过去的是一个请求连接，而因为网络问题服务端以为是两次，会造成客户端和服务端状态不一致）。这种情况就好比我向异地的好友借钱：")]),t._v(" "),_("p",[t._v("我：“喂~，XXX（好友小名）”（确认对方可以接收数据）")]),t._v(" "),_("p",[t._v("好友：“喂~，XXX（我的小名）”（确认自己可以接收数据）")]),t._v(" "),_("p",[t._v("我：“借我一个亿呗”（确认自己可以发送数据）")]),t._v(" "),_("h3",{attrs:{id:"_3、tcp四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、tcp四次挥手"}},[t._v("#")]),t._v(" 3、TCP四次挥手")]),t._v(" "),_("p",[t._v("（1）客户端认为数据发送完成，向服务器发送连接释放请求（不能发送数据，不带表不能发送请求（一些不带数据的连接请求，不进行数据），请求随时可以发）")]),t._v(" "),_("p",[t._v("（2）服务器发送ACK包，进入CLOSE_WAIT状态，此时连接已经释放（服务端不再接收客户端发送的数据，但是服务端可以向客户端发送数据，这是因为TCP是双向连接的）")]),t._v(" "),_("p",[t._v("（3）若服务端还有未发完的数据，会继续向客户端发送，完毕后会向客户端发送连接释放请求（就算服务端没有要发送的数据，也会向客户端发送释放请求，所以这第三次是必要的），服务端进入LAST_ACK状态")]),t._v(" "),_("p",[t._v("（4）客户端接收到了释放请求后，向服务端确认应答，客户端进入TIME_WAIT状态，持续2MSL（为了保证服务端正常关闭）。如果没有再接收到服务端发送的任何请求（确保服务端已经关闭），就进入CLOSED状态。 服务端接收到了确认应答也进入CLOSED状态 （如果服务端无法正常关闭，后果严重；但是客户端不会发生无法关闭）")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53175bba94c744f5bb0d12cd38db7a0a~tplv-k3u1fbpfcp-watermark.image?",alt:"TCPwave.png"}})])])}),[],!1,null,null,null);_.default=p.exports}}]);