import React from 'react';
import {
  Grid,
  Column,
  Accordion,
  AccordionItem,
  Link,
  UnorderedList,
  ListItem,
} from '@carbon/react';

const LandingPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading">--- Work In Progress ---</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <Accordion align="start" disabled={false}>
          <AccordionItem title="Carbon Repository" open>
            <p>
              <Link href="#/repos">Link</Link>
            </p>
            <p>
              Carbon Design System is an open-source design system developed and
              maintained by IBM. It provides a set of guidelines, principles,
              and resources for designing consistent and accessible user
              interfaces (UI) and user experiences (UX) for web and mobile
              applications. Carbon Design System is primarily focused on
              creating modern, enterprise-grade applications with a consistent
              look and feel, while also prioritizing accessibility and
              inclusivity.
            </p>
            <p>
              Carbon Design System includes a comprehensive set of components,
              patterns, and design assets that can be used by designers and
              developers to create visually appealing and user-friendly
              applications. Some key features of Carbon Design System include:
              <UnorderedList nested>
                <ListItem>
                  Carbon Components: A library of reusable UI components, such
                  as buttons, forms, modals, and icons, that can be used to
                  build consistent and responsive user interfaces. These
                  components are designed to be flexible and customizable,
                  making it easy to create unique and branded interfaces while
                  maintaining consistency.
                </ListItem>
                <ListItem>
                  Design guidelines: Detailed guidelines and principles for
                  designing visually appealing and effective user interfaces.
                  This includes guidance on typography, color palettes, spacing,
                  layout, and interactions, which helps ensure a consistent look
                  and feel across different parts of an application.
                </ListItem>
                <ListItem>
                  Accessibility: Accessibility is a core principle of Carbon
                  Design System, and it provides guidance and tools for
                  designing accessible user interfaces that can be used by
                  people with disabilities. This includes recommendations for
                  designing for keyboard navigation, providing proper semantic
                  markup, and using accessible colors and contrast ratios.
                </ListItem>
                <ListItem>
                  Design assets: Carbon Design System provides a set of design
                  assets, including Sketch and Figma libraries, that can be used
                  by designers to create high-fidelity mockups and prototypes.
                  These assets include pre-designed UI components, templates,
                  and icons that can be easily used in design projects.
                </ListItem>
                <ListItem>
                  Documentation and resources: Carbon Design System includes
                  comprehensive documentation, tutorials, and other resources
                  that provide guidance on how to use the design system
                  effectively. This includes documentation on design principles,
                  coding guidelines, and best practices for creating accessible
                  and inclusive user interfaces.
                </ListItem>
              </UnorderedList>
              Carbon Design System is widely used by designers and developers in
              the IBM ecosystem and beyond to create consistent, accessible, and
              modern user interfaces for web and mobile applications. It is an
              open-source project, available on GitHub, and is actively
              maintained and updated by IBM and the open-source community,
              allowing for contributions and improvements from a wide range of
              users.
            </p>
          </AccordionItem>
          <AccordionItem title="Github Repository" open>
            <p>
              <Link href="#/github">Link</Link>
            </p>
            <p>
              A GitHub repository, often simply referred to as a "repo," is a
              location where code and other files related to a particular
              project are stored and managed using Git, a popular version
              control system. GitHub is a web-based hosting service for Git
              repositories, providing a platform for developers to collaborate
              on projects, track changes, and share their code with others.
            </p>
            <p>
              A GitHub repository typically contains the following components:
              <UnorderedList nested>
                <ListItem>
                  Source code: This is the main content of the repository,
                  including the actual code files written in various programming
                  languages.
                </ListItem>
                <ListItem>
                  README file: This is a documentation file that provides
                  information about the project, its purpose, how to set it up,
                  and how to use it. It serves as a quick reference for other
                  developers who may want to contribute to or use the project.
                </ListItem>
                License file: This is a file that specifies the terms under
                which others can use, modify, and distribute the code in the
                repository. It clarifies the legal rights and restrictions
                associated with using the code.
                <ListItem>
                  Issue tracker: This is a tool provided by GitHub that allows
                  project stakeholders to create, manage, and discuss issues
                  related to the project, such as bug reports, feature requests,
                  and general discussions.
                </ListItem>
                <ListItem>
                  Branches and commits: Git allows developers to create branches
                  to work on different features or bug fixes independently and
                  merge them back into the main branch (often called the
                  "master" or "main" branch) when ready. Commits represent
                  individual changes made to the code, and they are used to
                  track the history of changes in the repository.
                </ListItem>
                <ListItem>
                  Collaborators: GitHub allows project owners to invite
                  collaborators who can access, contribute to, and manage the
                  repository. Collaborators can make changes, create branches,
                  submit changes for review, and perform other actions based on
                  their permissions.
                </ListItem>
              </UnorderedList>
            </p>
            <p>
              GitHub repositories are widely used by individual developers, open
              source projects, and organizations for managing and sharing code,
              collaborating on projects, and promoting code reuse and community
              involvement.
            </p>
          </AccordionItem>
          <AccordionItem title="Gitlab Repository" open>
            <p>
              <Link href="#/gitlab">Link</Link>
            </p>
            <p>
              A GitLab repository is a location where code and other files
              related to a particular project are stored and managed using Git,
              a popular version control system, similar to GitHub. However,
              unlike GitHub, GitLab is a web-based DevOps platform that provides
              not only version control capabilities but also a complete set of
              integrated tools for the entire software development lifecycle,
              including project management, continuous integration and
              deployment (CI/CD), and more.
            </p>
            <p>
              A GitLab repository typically contains similar components as a
              GitHub repository, including:
            </p>
            <UnorderedList nested>
              <ListItem>
                Source code: This is the main content of the repository,
                including the actual code files written in various programming
                languages.
              </ListItem>
              <ListItem>
                README file: This is a documentation file that provides
                information about the project, its purpose, how to set it up,
                and how to use it. It serves as a quick reference for other
                developers who may want to contribute to or use the project.
              </ListItem>
              <ListItem>
                License file: This is a file that specifies the terms under
                which others can use, modify, and distribute the code in the
                repository. It clarifies the legal rights and restrictions
                associated with using the code.
              </ListItem>
              <ListItem>
                Issue tracker: GitLab provides an integrated issue tracking
                system that allows project stakeholders to create, manage, and
                discuss issues related to the project, such as bug reports,
                feature requests, and general discussions.
              </ListItem>
              <ListItem>
                Branches and commits: Git allows developers to create branches
                to work on different features or bug fixes independently and
                merge them back into the main branch (often called the "master"
                or "main" branch) when ready. Commits represent individual
                changes made to the code, and they are used to track the history
                of changes in the repository.
              </ListItem>
              <ListItem>
                CI/CD pipelines: GitLab includes built-in CI/CD capabilities,
                allowing developers to define automated pipelines for building,
                testing, and deploying their code. These pipelines are defined
                in the repository and can be configured to automatically run
                whenever changes are pushed to the repository.
              </ListItem>
              <ListItem>
                Collaborators: GitLab allows project owners to invite
                collaborators who can access, contribute to, and manage the
                repository. Collaborators can make changes, create branches,
                submit changes for review, and perform other actions based on
                their permissions.
              </ListItem>
            </UnorderedList>
            <p>
              GitLab repositories are used by individual developers, teams, and
              organizations for managing and sharing code, collaborating on
              projects, and automating the software development process through
              integrated DevOps capabilities. GitLab also provides additional
              features such as integrated project management, container
              registry, and more, making it a comprehensive platform for modern
              software development.
            </p>
          </AccordionItem>
          <AccordionItem title="Docker Repository" open>
            <p>
              A Docker repository is a centralized location for storing and
              managing Docker images, which are lightweight, standalone, and
              executable software packages that include everything needed to run
              a piece of software, including the code, runtime, libraries, and
              dependencies. Docker is a popular containerization platform that
              allows developers to create, package, and distribute applications
              as containers, making it easier to deploy and run applications
              consistently across different environments.
            </p>
            <p>
              A Docker repository serves as a registry where Docker images can
              be stored, shared, and pulled by others. Docker repositories can
              be either public or private, depending on the permissions and
              access controls set by the repository owner. Public Docker
              repositories are accessible to anyone, while private Docker
              repositories require authentication and authorization to access.
            </p>
            <p>Docker repositories typically have the following components: </p>
            <UnorderedList nested>
              <ListItem>
                Docker images: These are the packaged software applications or
                services, along with their dependencies, that are stored in the
                repository. Docker images are created from Dockerfiles, which
                are text files that specify the instructions for building the
                image.
              </ListItem>
              <ListItem>
                Tags: Docker images can have multiple tags, which are
                human-readable labels that are associated with a particular
                version or variant of the image. Tags can be used to
                differentiate between different versions or configurations of
                the same Docker image.
              </ListItem>
              <ListItem>
                Metadata: Docker repositories often include metadata associated
                with Docker images, such as descriptions, version numbers, and
                release notes. This metadata provides additional information
                about the Docker images and helps users understand how to use
                them.
              </ListItem>
              <ListItem>
                Access controls: Docker repositories can have permissions and
                access controls that determine who can push Docker images to the
                repository, who can pull Docker images from the repository, and
                who can manage the repository.
              </ListItem>
              <ListItem>
                Search and discovery: Docker repositories often provide search
                and discovery features that allow users to find Docker images
                based on criteria such as keywords, tags, or popularity. This
                makes it easier to discover and reuse Docker images that are
                already available in the repository.
              </ListItem>
            </UnorderedList>
            <p>
              Docker repositories are used by developers, teams, and
              organizations for storing and sharing Docker images, enabling
              efficient collaboration and standardization in container-based
              application development and deployment. Docker repositories can be
              hosted locally within an organization's infrastructure or on
              cloud-based container registries such as Docker Hub, Google
              Container Registry, and Amazon Elastic Container Registry (ECR).
            </p>
          </AccordionItem>
        </Accordion>
      </Column>
    </Grid>
  );
};

export default LandingPage;
