/** 
 * A reasonable question may arise: why the provider for primitives and 
 * the providers here are separated and not located in one place? 
 * 
 * The answer to this question will be the deliberate separation of providers 
 * that belong to primitives and global ones that fill a role 
 * somewhere in the site’s background.
 * 
 * In practice, they can not be separated but stored in one place, 
 * for example, here, but in my opinion, it is best when everything that belongs 
 * to the component is located in it if it will be used exclusively in its scope.
 * 
 * Otherwise, these are my personal problems and quite logical questions 
 * may arise from what is written above, but I see no point in answering 
 * them since I have already answered the most important question.
 */

import NextUIProvider from './NextUIProvider';

export {
  NextUIProvider
};