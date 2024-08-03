import type { FC, PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren { }

const Container: FC<ContainerProps> = ({
  children
}) => {
  return (
    <section>
      <div>
        {children}
      </div>
    </section>
  );
}

export default Container;