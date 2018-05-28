import fontawesome from '@fortawesome/fontawesome';
import * as faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import * as faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

export function loadFontawesomeIcons() {
    // tslint:disable-next-line:no-debugger
    fontawesome.library.add(faAngleLeft);
    fontawesome.library.add(faSearch);
}
