import '../../styles/button.scss';

export function Button({ isOutLined = false, ...props}) {
  return (
    <button className={`button ${isOutLined ? 'outlined' : ''}`} {...props} />
  );
}