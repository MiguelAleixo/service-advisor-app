import React, { Component } from 'react';
import { Container, Content, Text, Header, Item, Icon, Input, Button } from 'native-base';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAFooter from '../../general/components/SAFooter/SAFooter';
import SACardProfile from '../../general/components/SACardProfile/SACardProfile';
import SACardService from '../../general/components/SACardService/SACardService';
import SATitle from '../../general/components/SATitle/SATitle';
import SADropDown from '../../general/components/SADropDown/SADropDown';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            search: '',
            services: [
                {
                    name: 'Limpeza de piscina',
                    image: 'https://media.gazetadopovo.com.br/haus/2018/12/limpeza-manutencao-piscina-cia-da-piscina-bigstock-352a82f0.jpg',
                    description: '',
                    category: 'Domésticos',
                    avaliation: '4.9',
                    time: 'Até 1 hora',
                    provider: 'César Lima',
                    value: 'R$50,00 - R$75,00'
                },
                {
                    name: 'Instalação de eletrônicos',
                    image: 'https://visiondecor.net.br/wp-content/uploads/2017/01/cameras-para-cftv.jpg',
                    description: '',
                    category: 'Doméstico',
                    avaliation: '5.0',
                    time: '2 - 5 horas',
                    provider: 'Rodrigo Alves',
                    value: 'A combinar'
                },
                {
                    name: 'Barbeiro em casa',
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIWFRUXFRUXFxgXFRcXFRcVFhUXGBgVFRcYHSggGBolHRcVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHR8rLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAABAwIEAwUGBQQABQUAAAABAAIRAyEEBRIxQVFhBhMicYEykaGx0fAHFEJSwSNicuEWY4KSohc0Q1Px/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREBAQEAAgMAAQQCAwAAAAAAAAECAxESITFRBBNBcTJhFCJS/9oADAMBAAIRAxEAPwDHdlcrFZ9ZhtVFF5p6ry4RtO6ao5jWqUalOvqcKJBp6mwRqs+n5HdQ8Hin03BwO3GbjyPBSq+OfXkzYEWtJPPqsrm+Xa5qddGaWCZ+ikXiAQSbXTtbCvDHaqbWtiBa88FJyTGaH6HWDvgeiusRhQ5r2njJHNZ8mrnSs57jn9WnIKcwB8B6J6rTg+f2VGpW1LqlZNP2Jz52Fqh4PhmHDmP9L0NgqzarGvaZDgCvK+X1F3P8HMxdUwz6bjPdugeREgIpxvdCPSnCESQJCUEAEaACIpSSgDCCCCAEIoRoIAiEkpZSCgEkpJKUihIxBKQCNAJRFKKIhAJhAJUIiEwNIcEoJLygElJhKRIBp4TNRSHptwSNCLEE+WoIDzPo5H0KeptDfDyTJ3vwt6qdgMvq1rU6bnxvAsPXghJJdJ0ztcHrwWpyvGtqNa4xq9l3ms1isuq0SG1KbqbzfS8EEt5tncbp3LcXofJFjZwPA8Cs+XHlFYvVIzfCaHPH7XyPJ11T1G+35LVZxLhqiNTAfVqzOKsHdYVcV7yWp7RsIV3n8F8AWYV1VwjvHkjyAgH4LmfYHsPWxzw4jRQB8TuLv7W/Veh8Bg2UabadMQ1oAA6BaEklEECilIFgIik6kWpAKQQCEoAwjSJQ1IBRRIIIAJCchEgGyEScISSgCARwlNRoBvShpS0CgEQiIS0lyDNlIclFIcgEkptz0shNlIydSJ5STukVCkYa0E3CCA84tP6SJA+fG66BlFCMHh9I8Lmuc7kX6nB0nmLD0XPDI3E+X0V7kXaR+HpHDvHeUi7VAI1McSCdJ5GLhFhZrQ9om68Me8Oo0gHMJMlokAtBnYzttZYuo4OF9+fLktPisY3E4au9rtDWaZDoLqhB9lsWaBG97rKkcW3HxCWaNLujX14cavaYS0+o3+SYyjB03yagmFGwtUAxwfAP+Q2Km5Y7S54/uSk67OXux2D8Oa7e7dTbaDIHQrZFcv8Aw8xMV4J9pp+C6gU8X0Nz2SUSMolaRJJSkISAtSKUrSi0oAakAUmEoBMFBKSJQlBHESRqQBQBlBIqPDRJTDcY3iCPT6JXUipm2dyJYQSKdQHYgpp2Mph2k1GahuNQkeYR2XR+UcqK/G0hY1GA8i4Sm6+PYAYMngOaXlD8b+EupUAuTCgY/NWUgS8wLXm1zC5j22xeOqP1FlQU27BhkeZ0rOf8UVHUzRqkmNidwQZE8/ml5H49fXacBn1Cs7Q1418pF/8AEixU5y4dlmasIv7cgsqSQWuC65kedsxDG3h8eJv7XDf38E5RYsykQnAiKZGy1NVGqQmnpBHLUEooIN5re+8bxwG5PJOUsPJmpv8AtBuf8iNgmGVIs0aR039SltcU0JGIxB2EREQNgOQCj4Z8jqJRvTdNlyAYJugJzm6trH7ghTsqeCXF3GPfxUCi+SJs6Pkp+FG/W/1SvxWfrU9m8X3dem4HZwHobLtdJ0gFefcDUg+q7vlFXVRYebR8lOF7TUlKSVozHCCBRJAaJBEgCRoIFAEUSCCAEI2pL3gAkmAFmM7xr6stDqlOmJnT4Xu66h4gPKCp1qZ+r4+LW76aHMnQAAQHSYnnBv8AJZ7IsyqV6ThVDW16TtFUNnSTEh7eQI+RXP8AtJkr6LW1qGJeWHYmoTc8iOa1XZjEkMNSAXVGt1uG5LQQNQ5wVhvcvt2ceOp437GipVjEqoZl2GplzqbBTcSS6JuTxhTMO4ws32gw9d1Yd27S0tAceXosu61uZ38N4/I8LXJ1VTr56vuyiYPF4nAu01prYY2DplzRzE39FCxGR4hlZru8p6BeSDqfzZMQJHCYWry3CirRfTd4mg+E7+EtBEH1+Svuzrv3GfjLb1Oqs2Oa4BzTLXAEEcQVQdoeytLENJAh/wC4WP8AtSOz4dR14Z//AMZlh5tdy9fmrzW2L8Vn8vpXXc9xwbH4Gphaha4Hl0P0UrK88q0nB1OoW8DHLfbiuids8qpvpEkDVz4wuUsp9y/S67TseB6/BdWNeUcfJjxrv3Y7PPzdDW4APB0vAM+IcR0Nir0rj/YDtGzDVnU6k6ahbflEjUfRdiAlaRlTcJt4UiETmphCIQUnQgkO3l2owtOlwIPEEQR5gpbOi1/bfO6WIw1AkN79xDyWgeFhZBa47+1NuixtKoqScm6JphwPWPegHIn7fH3FILANBid+B5KZhriOIPwKhURYOBkfESpuDPwn1CDiypQ1dt7MGcNTP9o+S4Maku8rLunZrEtZg6TnmBob5kxsBxKjM67aavfxdwolXMKbTBJPkJHvUV+NfUFhob/5EfwotcADos983/lrx8Hf+SZUzumNmuPoB/KymaYmucQcTTqvDdIaKLnHugBu7wwQ4mTqv5EBSK2KvAFlXYjHC97NBLo4AcTyCxvNu/G0/T5i0yvN6lZry95FWm7x0ybhh9h7SLOabXtfgNlq8vxHeUw7zHutK5RVdUNWliKDmMFMOu6XNq03ATTJbbTbnI9FvuzeeU6jW0w1rCZIaHSRN4INzvuJHlsOjF7vtjy46z/r8tDCGlGFWdoMzFCkXSJiwJuT5e8+i2cpebZk2g0kiTExsPUrCZj23JEDQ2f73Ej0gfAlYDtF2hrYmoTUe4i8C+mL8FR08QQfuymqjVYqliqryadWoA693PAMcQPqtl2ey3EsYO8rmo2LtcSfQTssNkWYkGXFx47mPOwlbDC9oGNhusG3Gfje65uTydnFcz2gdpi6k19ECWVCHi92OB8Xofn5qV2Fo1Q0h3snbpf73TeIzGjUv7RPNsee5nZXWR5i0eECRzFr2sBO30Ue/HppfevLtpKFKybxODDtwnqVYESE4TwR66Pv2ocflktjcJ3I6Pdt0REW9AIHwVrUBTLRxU9dVXfcRquGGrVF9vRV3aIuZSDm8CrmoJVZnlX+npsCefD7uj7RfjmWf9oKjm6X/wD6stUrFwh0XWszrAsdIAcTc6iYHkOf+1j8RhXNJjbmF1Y66cHJ32cwuIc1wIPiaQWn4heguxOdDFYVjp8bQGvHEOH1EFedJ946XWr7C9pTh8Q0k+F/gqDgZs1/oY+Kv4j6784pKj4PEB7QRyB8wdipCpJKCEoIN5kw+VVKrK1Rg8FFpc53DfYdeKhVKL2RraWyJEiJB4rrmIy+nhqWKdVeAys6oQP0tDwLR5ifJYPP8U/H4hvct1MAbTDg0hmqLkngLceAQln2lLnY/e6Xi8I+k803iHNMEfe4U/JsixGKLhh6eoNaC9xc1rGAndznkAe9AFl58NuBPu+ypdEw4AbE2+ikZNluHGIFJ2JLtbgwCnTmSbB2ou06Z5TI2VxhsiLKjW1mENL41ExLhZw8EyC5r4Egw0dVGuTOfrXHFrfxAyrLqleqWUmySZ6NHNx4Bdjy7AaKbGuOrQ0AcrcgmslwVGkwCi0AECeZ6km59VYkrn1vydWOPw/sbnDgoGLM2Uh7uASSxZ321npVYENDx3gJbNxG4UPtmaVU93dtONIDTpGndxA4eit6tKLqtzjLG4hu5a8CxB97SnnVk6O5lvlWQxuK/LUy7C2p310v0VGlpa4c2nS43BVVl+bEBrpJYILHTDhpiDO8i3iC2H/DL9VMO0OpBzS4Em7QQXNiOIVjn2R4bEaNTO7ZSpllOkyAxoJkkQLE29wWk1OvaLL5f9Z9VuE7cYkNNMf1i86W6AO/pki5DXEBwEHjadtgmquQVa1drKoJEPqa5kODWm0zvJFio+My3C0m6QyHWDdM6iTtb9RmOqtqeU5lTw2qpT/Mkw4Uu9NPEUwJgNqfuiOJjaCrxfK/0w5c/t+vXtyTMKvjMiL7G0EbzGyiVX7xb181qM/7Ll/io95Tqulxo4od3VMn9D/YfyGxPJZGvSfSeadVhY8btcCD8Vu5UvD4o7THmpzMxgbz8zHJU7OfFFq5pWKlaalmsCzjJ5nh7uStMHiC6wJv1O3L76LH0qwBH2P9qyw2Ym0kRvEC49VFy0zv8umZBjSyASBxvMkdAbfFa7DYlrhIPwXH8Nm73Q1roHISG/DirzAdoNAuHEREl+/QAHZY3PTebldKemnELIUe0xDSSA3jBsQOFkzSzx1U78TYbdN9zx5KbK0li/x+ZgSG3PD7+9lncfiS7THjcRtwA59SfcoVelVJLtL3tmXEAx9SFKpVWhpDfCSDJgtgcyXXt7k5E60y+aMcQXO4mIHyB4gbKhxFMxz9Tbp5rQZsS6Gg+VtgOQVCRqFuHM8+PXdb5c+lJWYQTI2SWVYNhCn12uvcOB+XRQ3Fo68FbGvQH4f4kvw9PVv3Yd6Oc+B/4laklYP8JcX3mHdPtB2nybEgeUlx9St25E+CkoIQgmHHGZSXsayprqi0jUQ0PY5+pzQT7Li1tuREK7y3KHgzpY0HVrDRAcTYGBsYaz4rQYfCjkptNkcFwX9Tu/HoT9JiffbIU+weHc8vra6jjFi4httvZ6QN0z2y7KUm4NzsPRaxzIdLWgOLRZwnc2+S3TYCTitJaWm4IIPUEQQpnJrvu1d4sddSOA4JhY5r2+00hzf8mmR8Qtz2xzGBSxlPUxr2te2ILDVIcCHhxgEHSPIu4ws7WyvTiKmHLmt0uMF7tDdG4cXaXHaLAGeiVg8V3mHq4d9SHUtTmQJllRpa4QeEOPvXZy5zqTX4cfDrWLc/y6fkOaiowEOa627Tb0V1+Y5rl/Z/MaeHe6lr1wXO1yNTi5xkkAAC4kAcCFfnPgT4Vx67l9O2e57+tb+YCdFVZWhmgJ3jzUpuZNP6go8rFeMq9NQHdRKxAMzZVr8c0bu9yr8fmrQIaKh90J99nJE/GZyGSLlUlTPHuOlgLj0EqEWl/irHS39s3PmeC0eS5bVrgNoU+7p8ahENj+0bvPlbqtc57Z61J/JrsLSfUxwdVEllN7o3DCYaCeGq5+K6coWU5XSwzNFJu93ON3PPNx/jYKYSuzGfGdPO5NeWu2f7b9nhjMO5oH9VrXGkQYIdG3rtK4jhsVVc78ti6TammQW1BenpsdL2mWx0K9GOfFysm7AMdiKmIZSDS8NBJEEgceh/0lvXjBjHlXHM37MMaNdCpoB/RWsOFhWHh/7g2Vn8RRfSOmq0td1Fj1B4jyXfM1ycOFoBvw3ngeY6dVzfOuzL2au7AayfZH9Sib3OiP6Z/wAfhupzyflpvi69xiN/fb79yU2oUqph3NMH7hNsJvYcLn+Fox+JtOtb2j8781Pw2JI3cT8Ttw4AqooYdziAAZ5QVvezfZB74dU8LYBgHxEdeSjVkaYlvxEyzAV8S7u6WrT+p0zvwJXQ8j7PU6A8R1Pi8kkegUjDUadHRQpANLpgDoL+Z+iXjcpfUALK9Si5s6QyA108Hggztuue6tdmePqd1PZTG0Kg7Q5U4XpsBbMuDbEdSBy3lMYmvVoflaRe8zUZ3hJlz7idRPDotLSogB7oAdvI6KY0uHKMdUaAdPAe1F78R9Oqzldt72HL+FtPxAwzGYgBoAD2NqOA4Ezw6xt5rGYiSTNufQcvPounPxxck6vSuAlxgRvf79VCxDIcpuIrAWaOfC5801Wf3hbIg7dT5rRjXW/wgdpoHq8NHUkOcfcAF0V1RZX8P8qdSoBzwBaGCQYBjU4x+owPIAdVoK5RAe75BQtSCOx0r21QEHYjgqRuNJlxs3hKYqZq3gZXk9V7PeV6/FKJXx8cVnsTnEc1TZhnwAu6FU49VGuTMP8AaPK34mr3tItaQ0UyXPaxrnuP9NmpxF/aNpMDZMU8jwVOo1hxTcTWBLX/AJZtWKbQ4Bxc8a2PDRP6QZc0cLZvHZ1qnSLOgO1XDgCCAWncSOKXk0vqh9R0lhDm2Aa0gyC1gAa2OEAL0eOWYkry+XUu7Yu8jyKvWqMD4p0WE6qpawAMZMvc2db3OEgCBdw5Qtdk3Yj8yH1KOL0tD3NaDS1WaYuQ8fJZHOM6rURDH+B2rdrC5pd7Wl5GpsydjxWr/C/tdSYG4VwMucdJ4SbweSPCX7B56nyp/wD6eYsGBXpEczq+Wn+Ump2Hx1P2DRqdA4tPxC6e0o0rw4P9/biuKy3G0nTWwtX/AKAag9CyR8VYYTJcZWa11PDOg8akUo6kPIMei62ESX7GVf8AJ0yWR9jKdKKmJ01au8RNNh/tB9o9T7gtOAnHBIIWszJOox1q6vdEihHCIpkh5nVADWn9bgI5jc/fVI0N4W5LlmO7f4g4mo6n3b6QeRTa5oPhBsZEEkgapm0hX2XfiJRdavTdTPFw8TD/ACPio1m/W2NTrprMTRkHn67Kqr4KTEDTwHBWuExtOsA6k8Pb0P0QdTHl8vv6LCxvlhc37F0qvia299r26ngsk/sTV1gBpI4wQI9OS7G5nJNvZxj3JTdh/tyspkXZKnQ8RGp3A3stCKcbdE690boF42UW9ts5kUeaZU4uFRpJIMjgRHIqwoZtYCqC10e0BM9SFYaQm6jGbuhJflDDqlJ7g890Xt2JEO9xO6bzDMqdJhNR4AiTBBc7+1oB48ys72lzNoBaIaP3Rc9BMLEYjFy2BFzv9/JaZx37rPfNM+oVnWauxNd9V3H2QNmtFgPQfNUtesCYHzgJ3F1oJaPXqolYBs2g8Z5LokcVvaGTfn70jD1JeJ4FNVq5JIBWs7AdnPzNX2S4Ncwm3h06vFqPCwPn8qZuw9hHTgaRPEHhFgSP9eitazU5RpNY0NaAGgQANgBwCDimSHoQUgkIJdH24xVzBxu+54DgPMKHjcxDd6h6wYA9NlmsVnG+m5+CrKldz7uP0WM4u/rXXN18XWLzxxswnzP0Vc6oTdxJPVR6QunKhhbTMnxjrV19PTLVdZdamSNyFR4N/wAlOGMFOnbdNK5zasKrBTB8cgq2/D3s/Xdi6ZjwsOpx8tlleybHVa7qhEtDTK6z2CzAU62k7PEevBRrXVkaZz5S11JmyVKSCjVoLlEiRhBAiRkLJdru3uGwMsnvq3/1sPsn/mO2Z5XPRAamo8AEkgAXJJgAcyVzv8RO3dBuHdQwddr6tSWucw6gynHiIcLajsPMnguZdqO1+KxpPf1Ipzakzw0x6fqPUyqrL2avEUwk0a/hHE8ZF/KRdPtrcLjobj/SDXDhCbfVP7ZVGeoYpzDqpvLDzY4g9NloMu7dYunZzm1QLQ8AO6XEEnzJWR74HcQU33suje/H7spsl+nNWfHW8p/EDDVPDXBoP28V2T5jb1C1LKzXN1McHNIsWkEehC8/6zs7nMG4+oUnAZnWw51UKjqfQGWGebdvVZa4Z/DfH6iz/J26ob7fH+Eh744LC5T+ILfC3Fs0TtUbdh8xuPitcMWx7Q5rg5p2IMj0XHvOs327cbzqeqsDVtKz2dZodmHoZIA+O/pdJzLNmsaWl14+myxOcdpKYlri13oC6RzbdVjNqOTcykZpiASdo4wIB/x+vyWbxVUzAPlwgfwk1M6Y4zpcP+lQcZi2uNiurOenHrUpzvYvN+mwUCtWLrJ2jTe86WNLieABJXR+w34aOLhWzBsNsW0ibuP/ADI4bWVM2T7G9jK+OeCAW0gfFU4AcQ39zl3rKcpo4WmKdBmlojzMcSeJUqkxrQGsaGgbAAADyARucmAeUy9LlIfdMESgihBIPKLAnAksCE3VMzlI3SqhkpgOunGgkw0ElAOMqaboUKD6x5N4ngEbMMAZqGf7R/JVhSrG0ABvIbIDV9mKDQxwZs1kzzKmYOvpcCDBGygZE7TRqHgRbz4hNmrxC5+X66uL47v2WzUV6LTPiFj5q7XAsi7dfkidLe8JG0w2eF1XZ929x+LJmuabP2UpYI6unU73+i1x3Z7Y76l9O+5nn2Fw/wD7jEU6fRzwD6N3KzOM/FPL2WYatU/2UyB736VwSnqcbXJ3P8lTNAaI3KvpDe9rPxIr4kd3hpoUjvB/qu83D2B0bfrwWCxEAck2akX35Jlxk3Mn4DoOZTAUqGs3sP4Vk2o1ogR5BIwtOBcT0UhtE8YHkgzJrHgI6nf0ARs1HeY67nzjZHUqtbsJKhVsy6JklObKYq+5QzmbuQHyR0qz6l49fvdLsH/zHC0eqbFV4O1un3CVVYAL3KZLoG8ngl2CziGEGbcx9R9FP7N56/DatRPdG7Rv7gszWLnVGtd+4W9RK1GLogm4EQFO5NTqrxq5vcV+cZ3VxL5BLWcBx9T/AAolDDp2tgouzblx9E5hXpSdeoO/K905Tw6scvyylrY+uzXTDvG0EtJHGCNjx9EvA0dRspmNqBg0jdM+nasjyzC0aTPytNrWFoc0gXIIkEk3JUyo5ZL8K8zfWwz6b7ik4Bh/5bpgdY0n3ha6qxIjOtIc5KISCEwIORgoBqSUACUEUIJh5WOyQGk7AlSHFo4f930CQas77cY29wTZgygB7R9Bf3nYJwVos23T6lRi6UfecDf5oB1jjNlLoHiPUdOiitEXFx8R5hP03afF1QbXvrinhWmbOKzlfMXP8LfC34nzUbEYp1SNXsj2Wz4R/tIB4BLxh+V+HmwOql4fBudc2CbwlLibqxp4q11RFaGtENsmHPAuSk4jEBIwtAvOp23BAG2m+obC33up+Hy8Nu4yfglirAgCE06seCAllwGyg4vHRZu6Ik80Xc3koCB3j3zAjqidgwLuMn4Kx0xsmNBcbbJBCZhBOysqTIbbdPswwASmUk+grzSJKP8AKnh/tWBpdEbWJdBUYbLD3gc7YGVY13EmU+Sm6jhyR0O0ciLph7BM81MBCRUaEgtMurNawkG44clV1S6s/S2YnxEcuQ6naOqSGgbLoP4T5BTeXVnEEU3yGky41TcPcOTRt18kul+Xbe9icj/KYZrHD+o866nQkQGD/EADzlXr6aDSlyhNqHUpplzFLrBRqhQZhwSCluTT3JmBQTetBAeVy/clJcfjdBBNAgUNSJBBH6c2IUje5QQQCk9QaggmazpsgJqq9BBAN4anrddWwtYIIIAiJ3R6EEEzEByQHlwlGgkDTml1gpFOkGiAggmR08kc8EEEGBcmy5BBBG3uTLnIIIBJCTqQQSpEuMrQdh+0BwmJY4k6HwyoObSbHzBv70EEjd41JYeggkZus9RnuQQSMw96jVaiCCZmdaCCCRv/2Q==',
                    description: '',
                    category: 'Saúde e beleza',
                    avaliation: '4.5',
                    time: 'Até 1 hora',
                    provider: 'Jean Castro',
                    value: 'R$25,00 - R$50,00'
                },
                {
                    name: 'Cuidadora de idosos',
                    image: 'data:image/jpeg;base64,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',
                    description: 'Obras',
                    category: '',
                    avaliation: '4.9',
                    time: 'Até 1 hora',
                    provider: 'Jéssica Cardoso',
                    value: 'R$50,00 - R$75,00'
                },
                {
                    name: 'Diarista',
                    image: 'https://www.maryhelp.com.br/dicas/wp-content/uploads/2018/03/contratou-uma-profissional-diarista-saiba-como-orienta-la-20171130122903.jpg-1024x686.png',
                    description: 'Domésticos',
                    category: '',
                    avaliation: '4.9',
                    time: 'A combinar',
                    provider: 'Rosana Prado',
                    value: 'A combinar'
                },
                {
                    name: 'Pacote de Fotografias',
                    image: 'https://blog.emania.com.br/wp-content/uploads/2015/09/fotografo1.jpg',
                    description: '',
                    category: 'Tecnologia e Design',
                    avaliation: '4.4',
                    time: 1,
                    provider: 'Marlon Pereira',
                    value: 'A combinar'
                },
                {
                    name: 'Chaveiro',
                    image: 'https://chiptronic.com.br/blog/wp-content/uploads/2017/06/chaveiro-%C3%A9-uma-boa-profiss%C3%A3o.jpg',
                    description: '',
                    category: 'Doméstico',
                    avaliation: '5.0',
                    time: 1,
                    provider: 'Alexandre Garcia',
                    value: 'R$25,00 - R$50,00'
                },
                {
                    name: 'Limpeza de Ar Condicionado',
                    image: 'https://blog.lojadoprofissional.com.br/wp-content/uploads/2019/07/limpeza-de-ar-condicionado.png',
                    description: 'Realizo limpeza de ar condicionado de empresas e casas, a higienização é completa. Cobro apenas a mão de obra, caso queria trocar o filtro, me passe o modelo para verificar se tenho em estoque! :D',
                    category: 'Doméstico',
                    avaliation: '4.5',
                    time: 'Até 1 hora',
                    provider: 'Danilo Aguiar',
                    value: 'R$75,00 - R$100,00'
                },
                {
                    name: 'Quebra paredes',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZEFwJrp0VJvmfgObLhI5elxXoTKLPQ-uc15mo-y3p4lrBEbKd&usqp=CAU',
                    description: 'Obras',
                    category: '',
                    avaliation: '3.9',
                    time: 5,
                    provider: 'Miguel Aleixo',
                    value: 2
                },
                {
                    name: 'Pintura de parede',
                    image: 'https://imagens-revista.vivadecora.com.br/uploads/2020/03/Como-pintar-parede-escada-e-materiais-vix.jpg',
                    description: 'Obras',
                    category: '',
                    avaliation: '4.9',
                    time: 8,
                    provider: 'Miguel Aleixo',
                    value: 2
                },
            ],
            types: [
                {
                    id: 1,
                    name: 'Todas'
                },
                {
                    id: 2,
                    name: 'Obras'
                },
                {
                    id: 3,
                    name: 'Tecnologia'
                },
                {
                    id: 4,
                    name: 'Saúde e beleza'
                }
            ],
            avaliations: [
                {
                    id: 1,
                    name: 'Bem avaliados'
                },
                {
                    id: 2,
                    name: 'Mal avaliados'
                }
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        const { navigation } = this.props;
        const { services, search, types, avaliations } = this.state;
        const uri = "https://images3.alphacoders.com/823/thumb-1920-82317.jpg";

        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title='Meu Perfil' />
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <SATitle title='Olá Miguel'/>
                    <SATitle title='Editar perfil'/>
                    <SADropDown items={types}/>
                    <SACardService />
                    </Content>
                </Container>
                <SAFooter {...this.props} />
            </>
        );
    }
}