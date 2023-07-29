import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/johancrespo01",
            logo: logoGithub,
        },
        {
            name: "Linkedind",
            link: "www.linkedin.com/in/johan-crespo-castro-6722b5254",
            logo: logoLinkeind,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/@tecnotutoriales4230/videos",
            logo: logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>Johan CRespo Castro</p>
                        <p>FrontEnd Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Johan Crespo Castro Ing de sistemas, Desarrollador Frontend con 2+ años de experiencia en desarrollo web. Amplio dominio de Angular, React, Ionic y otros frameworks. Experto en HTML, CSS, Javascript y Git. Capacidad probada para trabajar colaborativamente en equipos de desarrollo. #DesarrolloWeb
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/Logo.jpg" alt="Johan Crespo - FrontEnd Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;