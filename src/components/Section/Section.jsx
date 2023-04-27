import CSS from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <section>
      <div className={CSS.container}>{children}</div>
    </section>
  );
};
